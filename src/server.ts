class Server {

  async loadValidGuesses(): Promise<string[]> {
    const response = await fetch("/pediagames/wordle/validGuesses.json", { mode: "cors" });
    if (!response.ok) {
      throw new Error("Failed to load data");
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }
    return data.map((item: any) => {
      if (typeof item !== "string") {
        throw new Error("Array contains non-string item");
      }
      return item;
    });
  }

  async saveGameWon(numero_di_tentativi: number) {
    // https://www.pediatria.it/pediagames/wordle-ajax/partita-finita.asp?ha_indovinato_la_parola_segreta=True&numero_di_tentativi=4
  }

  async saveGameLost() {
    // https://www.pediatria.it/pediagames/wordle-ajax/partita-finita.asp?ha_indovinato_la_parola_segreta=False
  }
}

export default new Server();
