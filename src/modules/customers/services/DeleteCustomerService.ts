import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICustomersRepository } from "../domain/repositories/ICustomersRepository";
interface IRequest {
  id: string;
}

@injectable()
export default class DeleteCustomerService {

  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository
  ) { }

  public async execute({ id }: IRequest): Promise<void> {
    const customer = await this.customersRepository.findOne(id)

    if (!customer) {
      throw new AppError('Cliente não encontrado.', 404)
    }

    await this.customersRepository.remove(customer)
  }

}