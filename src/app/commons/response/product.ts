import { Time } from "@angular/common";
import { BaseResponse } from "./response";
import { CategoryData } from "./category";
import { ImageRes } from "./image";

export class ProductRes extends BaseResponse {
    data!: ProductData[];
}

export class ProductDetailRes extends BaseResponse {
    data!: ProductDetailData[];
}

export class ProductDetailData {
    id!: number;
    price!: number;
    countInStock!: number;
    product!: ProductData;
    discount!: DiscountData;
    color!: string;
    size!: SizeData;
}

export class ProductData {
    id!: number;
    name!: string;
    description!: string;
    price!: number;
    createdAt!: Date;
    category!: CategoryData;
    material!: MaterialData;
    supplier!: SupplierData;
    images!: ImageRes[];
    discount!: DiscountData;
}

export class MaterialData {
    id!: number;
    name!: string;
    description!: string;
}

export class SupplierData {
    id!: number;
    name!: string;
    phoneNumber!: string;
    address!: string;
    note!: string;
}

export class DiscountData {
    id!: number;
    name!: string;
    value!: number;
    endDate!: Date;
}

export class SizeData {
    id!: number;
    name!: string;
}