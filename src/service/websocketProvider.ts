import { ApiResponse, ChessPiece } from "@/models/models";


export class WebsocketProvider {
    //Intance of himself
    private static instance: WebsocketProvider;

    mainUrl = "ws://127.0.0.1:8000"

    private constructor() {}

    //Create a new instance of websocketprovider if it doesn't exists
    public static getInstance(): WebsocketProvider {
        if (!WebsocketProvider.instance) {
            WebsocketProvider.instance = new WebsocketProvider();
        }
        return WebsocketProvider.instance;
    }

    //One instance of websocket
    private socket: WebSocket | undefined;

    //Call function to store results
    private onMessageCallback?: (chessPieces: ChessPiece[]) => void;

    ConnectAndListenning(param: string, onMessage: (chessPieces: ChessPiece[]) => void) {

        //Put a new instance of websocket
        this.socket = new WebSocket(this.mainUrl + param);
        this.onMessageCallback = onMessage;

        this.socket.onopen = () => {
            return undefined
        };

        //Get response
        this.socket.onmessage = (event) => {
            const response: ApiResponse = JSON.parse(event.data);
            //Did a callback (the action in store)
            if (this.onMessageCallback) {
                this.onMessageCallback(response.data as ChessPiece[]);
            }
        };
        //Catch error
        this.socket.onerror = (error) => {
            console.log(error)
        }
    }

    //Send any message to websocket
    sendMessage(message: unknown) {
        const jsonData = JSON.stringify(message)
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket?.send(jsonData)
        } else {
            console.warn("WebSocket n'est pas ouvert ou est fermé. Message non envoyé.");
        }
    }

    disconnect() {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.close(1000, "Client disconnected");
        } else {
            console.warn("WebSocket is already closed or undefined.");
        }
    }

}