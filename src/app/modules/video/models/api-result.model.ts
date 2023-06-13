import { Video } from "./video.model";

export class ApiResult {
    results: Video[];
    meta: Meta;
}

export class Meta {
    type: string;
    q: string;
    count: number;
}