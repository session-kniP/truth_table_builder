import { useCallback } from 'react';
import { useRequest } from './request.hook';
//import { AuthContext } from '../../context/AuthContext';
//import { TOKEN_NAME } from '../../constants/constants';

import HttpStatus from 'http-status-codes';
import { RequestDataType } from './RequestDataType';
import { useHistory } from 'react-router-dom';
import { ChainException } from '@session-knip/general';

export const useHttpRequest = () => {
    const { request } = useRequest();
    //const { logout } = useContext(AuthContext);
    const history = useHistory();

    const httpRequest = useCallback(
        async ({
            url,
            method = 'GET',
            headers = {},
            body = null,
            type = RequestDataType.JSON,
        }) => {
            try {
                //const token = localStorage.getItem(TOKEN_NAME);

                //if (token) {
                //    headers['Authorization'] = 'Bearer_' + token;
                //}

                const response = await request({
                    url,
                    method,
                    headers,
                    body,
                    type,
                });

                return type === RequestDataType.IMAGE_JPEG
                    ? response.blob()
                    : response;
            } catch (e) {
                if (!e.code) {
                    //logout();
                    throw new ChainException({ message: e.message, cause: e });
                }

                if (
                    e.code === HttpStatus.FORBIDDEN ||
                    e.code === HttpStatus.INTERNAL_SERVER_ERROR ||
                    !e.code
                ) {
                    console.log('net');
                    //logout();
                    history.go();
                }

                throw new ChainException({
                    message: e.cause.message,
                    cause: e,
                });
            }
        },
        []
    );

    return { httpRequest };
};
