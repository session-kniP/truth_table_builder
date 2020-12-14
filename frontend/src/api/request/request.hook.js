import { useState, useCallback } from 'react';
import { REMOTE } from '../../constants/constants';
import { RequestDataType } from './RequestDataType';
import HttpStatus from 'http-status-codes';
import { HttpException } from './HttpException';

export const useRequest = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(
        async ({ url, method = 'GET', headers = {}, body = null, type }) => {
            setLoading(true);
            try {
                if (body != null && type === RequestDataType.JSON) {
                    body = JSON.stringify(body);
                }

                switch (type) {
                    case RequestDataType.FORM_DATA:
                        // headers['Content-Type'] = undefined;
                        // headers['Process-Data'] = undefined;
                        break;

                    case RequestDataType.IMAGE_JPEG:
                        headers['Content-Type'] = 'image/jpeg';
                        break;

                    case RequestDataType.JSON:
                    default:
                        headers['Content-Type'] = 'application/json';
                        headers['Accept'] = 'application/json';
                        break;
                }

                headers['Access-Control-Allow-Origin'] = '**';
                headers['Access-Control-Allow-Credentials'] = true;

                const dataResponse = await fetch(REMOTE + url, {
                    method,
                    headers,
                    body,
                    credentials: 'include',
                });

                const response =
                    type === RequestDataType.JSON
                        ? dataResponse.json()
                        : dataResponse;

                if (dataResponse.status !== HttpStatus.OK) {
                    let message;
                    await response.then((value) => {
                        message = value.message;
                    });

                    throw new HttpException({
                        message: message,
                        statusCode: dataResponse.status,
                    });
                }

                return response;
            } catch (e) {
                if (!e.statusCode) {
                    throw new HttpException({
                        message: 'Server is not responding',
                        cause: e,
                    });
                } else {
                    throw new HttpException({
                        message: "Can't execute request",
                        code: e.statusCode,
                        cause: e,
                    });
                }
            } finally {
                setLoading(false);
            }
        },
        []
    );

    const clearError = () => {
        setError(null);
    };

    return { request };
};
