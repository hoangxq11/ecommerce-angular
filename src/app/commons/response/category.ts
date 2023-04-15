import { ImageRes } from "./image";
import { BaseResponse } from "./response";

export class CategoryRes extends BaseResponse{
    data!: CategoryData[];
}

export class CategoryData {
    id!: number;
    categoryParent!: CategoryRes;
    name!: string;
    image!: ImageRes;
}