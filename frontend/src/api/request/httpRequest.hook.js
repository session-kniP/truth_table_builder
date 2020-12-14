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
        async ({ url, method = 'GET', headers = {}, body = null, type = RequestDataType.JSON }) => {
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

                return type === RequestDataType.IMAGE_JPEG ? response.blob() : response;
            } catch (e) {
                if (!e.statusCode) {
                    //logout();
                    throw new ChainException(e.message, e);
                }

                if (
                    e.statusCode === HttpStatus.FORBIDDEN ||
                    e.statusCode === HttpStatus.INTERNAL_SERVER_ERROR ||
                    !e.statusCode
                ) {
                    //logout();
                    history.go();
                }

                throw new ChainException(`${e.cause.message}: ${e.getRootMessage()}`, e);
            }
        },
        []
    );

    return { httpRequest };
};
