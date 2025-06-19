"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const services_1 = require("./services");
const controllers_1 = require("./controllers");
let ChatbotModule = class ChatbotModule {
};
exports.ChatbotModule = ChatbotModule;
exports.ChatbotModule = ChatbotModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.ChatEntity,
                entities_1.ChatDetailEntity,
                entities_1.ProcessEntity,
                entities_1.TagEntity,
                entities_1.MessageResponseEntity,
                entities_1.ConversationHistoryEntity,
            ]),
        ],
        providers: [
            services_1.ChatService,
            services_1.ChatDetailService,
            services_1.ProcessService,
            services_1.TagService,
            services_1.MessageResponseService,
            services_1.ConversationHistoryService,
        ],
        controllers: [
            controllers_1.ChatController,
            controllers_1.ChatDetailController,
            controllers_1.ProcessController,
            controllers_1.TagController,
            controllers_1.MessageResponseController,
            controllers_1.ConversationHistoryController,
        ],
        exports: [
            services_1.ChatService,
            services_1.ChatDetailService,
            services_1.ProcessService,
            services_1.TagService,
            services_1.MessageResponseService,
            services_1.ConversationHistoryService,
        ],
    })
], ChatbotModule);
//# sourceMappingURL=chatbot.module.js.map