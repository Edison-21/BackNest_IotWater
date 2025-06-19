"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../entities");
const typeorm_2 = require("typeorm");
const consts_1 = require("@auth/consts");
let UserService = UserService_1 = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
        this.logger = new common_1.Logger(UserService_1.name, { timestamp: true });
    }
    async findAll() {
        this.logger.log('Iniciando busqueda de todos los usuarios');
        const data = await this.usersRepository.find();
        this.logger.log('Fin de la busqueda de todos los usuarios');
        return data;
    }
    async findOneByUsername(login) {
        try {
            this.logger.log('Iniciando la busqueda del usuario ');
            const data = await this.usersRepository.findOneByOrFail({
                username: login.username,
            });
            this.logger.log('Fin del usuario');
            return data;
        }
        catch (e) {
            if (e instanceof typeorm_2.EntityNotFoundError) {
                const error = e;
                this.logger.error(`No se encontro el usuario: ${error.name}, mensaje: ${error.message}`);
                throw new common_1.ForbiddenException(consts_1.AUTH_MESSAGE_ERROR);
            }
            else {
                const error = e;
                this.logger.error(`ERR: ${error.name}`);
                this.logger.error(`ERR: ${error.message}`);
                throw new common_1.BadRequestException(`Algo salio mal`);
            }
        }
    }
    async findOneById(id) {
        try {
            this.logger.log('Iniciando la busqueda del usuario ');
            const data = await this.usersRepository.findOneByOrFail({
                id,
            });
            this.logger.log('Fin del usuario');
            return data;
        }
        catch (e) {
            if (e instanceof typeorm_2.EntityNotFoundError) {
                const error = e;
                this.logger.error(`No se encontro el usuario: ${error.name}, mensaje: ${error.message}`);
                throw new common_1.ForbiddenException(consts_1.AUTH_MESSAGE_ERROR);
            }
            else {
                const error = e;
                this.logger.error(`ERR: ${error.name}`);
                this.logger.error(`ERR: ${error.message}`);
                throw new common_1.BadRequestException(`Algo salio mal`);
            }
        }
    }
    async create(payload) {
        this.logger.log(`Creando un nuevo usuario con el nombre ${payload.username}`);
        const newUser = await this.usersRepository.save({
            email: payload.email,
            password: payload.password,
            username: payload.username,
        });
        this.logger.log('Verficando de que el usuario se creo correctamente');
        if (!newUser) {
            this.logger.error('No se ha guardado correctamente el usuario');
            throw new common_1.BadRequestException('El usuario no se ha podido guardar correctamente');
        }
        return newUser;
    }
    async updateRtHash(id, refreshToken) {
        this.logger.log('Modificando el refresh token');
        const user = await this.usersRepository.update(id, { refreshToken });
        this.logger.log('Verficando de que el usuario se actualizo correctamente');
        if (!user) {
            this.logger.error('No se ha actualizado correctamente el usuario');
            throw new common_1.BadRequestException('El usuario no se ha podido guardar correctamente');
        }
        this.logger.log('Devolviendo el usuario despues de la actualizacion del refresh token');
        return user;
    }
    async updateUsersWithRefreshToken(id) {
        this.logger.log(id);
        const users = await this.usersRepository.findBy({
            id,
            refreshToken: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()),
        });
        if (users.length < 1) {
            this.logger.error('No se ha actualizado correctamente el usuario');
            throw new common_1.BadRequestException('No se pudo cerrar la sesión. Por favor, inténtelo nuevamente.');
        }
        const updatedUsers = users.map((user) => ({
            ...user,
            refreshToken: '',
        }));
        await this.usersRepository.save(updatedUsers);
        return {
            users,
            refreshToken: '',
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map