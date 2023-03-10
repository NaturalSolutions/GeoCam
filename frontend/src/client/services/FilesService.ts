/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Annotation } from '../models/Annotation';
import type { Body_extract_exif_files_exif__post } from '../models/Body_extract_exif_files_exif__post';
import type { Body_upload_file_files_upload__deployment_id__post } from '../models/Body_upload_file_files_upload__deployment_id__post';
import type { Body_upload_files_files_upload_files__deployment_id__post } from '../models/Body_upload_files_files_upload_files__deployment_id__post';
import type { Body_upload_zip_files_upload_zip__deployment_id__post } from '../models/Body_upload_zip_files_upload_zip__deployment_id__post';
import type { Files } from '../models/Files';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FilesService {

    /**
     * Get Files
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getFilesFilesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Update Annotations
     * @param fileId
     * @param requestBody
     * @returns Files Successful Response
     * @throws ApiError
     */
    public static updateAnnotationsFilesAnnotationFileIdPatch(
        fileId: string,
        requestBody: Array<Annotation>,
    ): CancelablePromise<Files> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/files/annotation/{file_id}',
            path: {
                'file_id': fileId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Display File
     * @param name
     * @returns any Successful Response
     * @throws ApiError
     */
    public static displayFileFilesUrlsGet(
        name: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/urls/',
            query: {
                'name': name,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Extract Exif
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static extractExifFilesExifPost(
        formData: Body_extract_exif_files_exif__post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/exif/',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload File
     * @param deploymentId
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadFileFilesUploadDeploymentIdPost(
        deploymentId: number,
        formData: Body_upload_file_files_upload__deployment_id__post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload/{deployment_id}',
            path: {
                'deployment_id': deploymentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload Files
     * @param deploymentId
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadFilesFilesUploadFilesDeploymentIdPost(
        deploymentId: number,
        formData: Body_upload_files_files_upload_files__deployment_id__post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload_files/{deployment_id}',
            path: {
                'deployment_id': deploymentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Download File
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public static downloadFileFilesDownloadIdGet(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/download/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Upload Zip
     * @param deploymentId
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static uploadZipFilesUploadZipDeploymentIdPost(
        deploymentId: number,
        formData: Body_upload_zip_files_upload_zip__deployment_id__post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload_zip/{deployment_id}',
            path: {
                'deployment_id': deploymentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Deployment Files
     * @param deploymentId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readDeploymentFilesFilesDeploymentIdGet(
        deploymentId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/{deployment_id}',
            path: {
                'deployment_id': deploymentId,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
