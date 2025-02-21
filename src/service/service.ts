import { ChessPiece } from "@/models/models";

interface ApiResponse {
    response: string,
    data: unknown
}

const getChessUrl = "ws://127.0.0.1:8000/ws/chess"

export function fetchChess(): Promise<ChessPiece[]> {
    return new Promise((resolve, reject) => {

        const socket = new WebSocket(getChessUrl);

        socket.addEventListener("open", () => {
            socket.send("Connection established");
        });

        socket.addEventListener("message", event => {
            try {
                const response: ApiResponse = JSON.parse(event.data);
                resolve(response.data as ChessPiece[]);
            } catch (error) {
                reject(error);
            }
        });

        socket.addEventListener("error", error => {
            reject(error);
        });
    });
}
