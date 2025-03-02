import { ApiResponse, ChessPiece } from "@/models/models";


export class WebsocketProvider {

    mainUrl = "ws://127.0.0.1:8000"

    //One instance of websocket
    private socket: WebSocket | undefined;

    //Call function to store results
    private onMessageCallback?: (chessPieces: ChessPiece[]) => void;

    ConnectAndListenning(param: string, onMessage: (chessPieces: ChessPiece[]) => void) {

        //New instance
        this.socket = new WebSocket(this.mainUrl + param);
        this.onMessageCallback = onMessage;

        this.socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        this.socket.onmessage = (event) => {
            const response: ApiResponse = JSON.parse(event.data);
            //make a callback (the action in store)
            if (this.onMessageCallback) {
                this.onMessageCallback(response.data as ChessPiece[]);
            }
        };

        this.socket.onerror = (error) => {
            console.log(error)
        }
    }

    disconnect() {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.close(1000, "Client disconnected");
            console.log("WebSocket disconnected");
        } else {
            console.warn("WebSocket is already closed or undefined.");
        }
    }

}