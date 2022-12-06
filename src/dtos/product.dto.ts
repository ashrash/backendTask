import { IsString, IsNotEmpty, ValidateIf, IsNumber, IsIn, IsOptional } from 'class-validator';

export class CreateProduct {

    @IsString()
    @IsNotEmpty()
    public title: string;

    @IsString()
    @IsNotEmpty()
    public description: string;

    @IsString()
    @IsNotEmpty()
    public pictureUrl: string;

    @IsNumber()
    @IsNotEmpty()
    public price: number;

    @IsNumber()
    @IsNotEmpty()
    public quantity: number;

}

export class SearchProduct {
    @IsString()
    @IsOptional()
    public title: string;

    @IsString()
    @IsOptional()
    public description: string;

    @IsString()
    @IsOptional()
    public sortField: string;

    @ValidateIf(o=> o.sortField)
    @IsNotEmpty()
    @IsString()
    @IsIn(["ASC", "DESC"])
    public sortDirection: string;

}