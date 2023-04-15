import { BaseResponse } from "./response";

export class SearchSpecRes extends BaseResponse {
    data!: SearchData[];
}

export class SearchData {
    id!: number;
    title!: string;
    numOfProduct!: number;
}