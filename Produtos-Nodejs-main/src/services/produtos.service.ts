import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  findOne(id: number): Promise<Produto> {
    return this.produtoRepository.findOne({ where: { id } });
  }

  async create(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async update(id: number, produto: Produto): Promise<Produto> {
    const produtoExistente = await this.produtoRepository.findOne({ where: { id } });
    if (!produtoExistente) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    await this.produtoRepository.update(id, produto);
    return this.produtoRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    const result = await this.produtoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
  }
}
