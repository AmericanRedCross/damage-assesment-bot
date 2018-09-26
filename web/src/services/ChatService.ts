import RcdaApiClient from "@/services/utils/RcdaApiClient";
import ChatRegistrationRequest from "@common/models/services/chat-registration/ChatRegistrationRequest";

export default class ChatService {

    constructor(private apiClient: RcdaApiClient) { }
    
    public async registerChannel(registrationToken: string): Promise<void> {
        let request: ChatRegistrationRequest = {
            registrationToken
        };
        let sessionToken = localStorage.getItem("sessionToken");
        let headers = { "Authorization": `Bearer ${sessionToken}` };
        let response = await this.apiClient.post("api/chat/registration", request, { headers });
    }
}