import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entities/products.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepo: Repository<Products>,
  ) {}

  async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto);
    const savedProduct = await this.productsRepo.save(product);

    return {
      message: 'Product created successfully',
      data: savedProduct,
    };
  }

  async findAll() {
    const products = await this.productsRepo.find({
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      message: 'All products fetched',
      count: products.length,
      data: products,
    };
  }

  async findOne(id: number) {
    const product = await this.productsRepo.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      throw new NotFoundException(
        `Product with id ${id} not found`,
      );
    }

    return {
      message: 'Product fetched',
      data: product,
    };
  }

  async update(id: number, dto: PartialUpdateProductDto) {
    await this.findOne(id);

    await this.productsRepo.update(id, dto);

    const result = await this.findOne(id);

    return {
      message: 'Product updated successfully',
      data: result.data,
    };
  }

  async replace(id: number, dto: UpdateProductDto) {
    await this.findOne(id);

    await this.productsRepo.update(id, {
      name: dto.name,
      description: dto.description ?? null,
      price: dto.price,
      stock: dto.stock ?? 0,
      category: dto.category,
      isActive: dto.isActive ?? true,
    });

    const result = await this.findOne(id);

    return {
      message: 'Product replaced successfully',
      data: result.data,
    };
  }

  async remove(id: number) {
    const result = await this.productsRepo.delete(id);

    if (!result.affected) {
      throw new NotFoundException(
        `Product with id ${id} not found`,
      );
    }

    return {
      message: 'Product deleted successfully',
      id,
    };
  }
}
