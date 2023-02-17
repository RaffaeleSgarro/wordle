export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Ottimo lavoro!', 'Fantastico', 'Ben fatto!']
export const GAME_COPIED_MESSAGE = 'Copiato negli appunti'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Troppo corto'
export const WORD_NOT_FOUND_MESSAGE = 'Non consentito'
export const HARD_MODE_ALERT_MESSAGE =
  'La modalità difficile deve essere impostata prima di iniziare!'
export const HARD_MODE_DESCRIPTION =
  'Le lettere scoperte devono essere usate nei tentativi successivi'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Per migliorare la visibilità'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La parola era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `La lettera ${guess} si trova nella casella ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `La parola deve contenere ${letter}`
export const ENTER_TEXT = 'Prova!'
export const DELETE_TEXT = '\u232B'
export const STATISTICS_TITLE = 'Statistiche'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuzione dei tentativi'
export const NEW_WORD_TEXT = 'Nuova parola tra'
export const SHARE_TEXT = 'Condividi'
export const SHARE_FAILURE_TEXT =
  'Impossibie condividere il risultato. Funzionalità disponibile solo su HTTPS sui browser supportati.'
export const MIGRATE_BUTTON_TEXT = 'Migrazione'
export const MIGRATE_DESCRIPTION_TEXT =
  'Clicca qui per migrare le tue statistiche su un altro dispositivo.'
export const TOTAL_TRIES_TEXT = 'Partite'
export const SUCCESS_RATE_TEXT = 'Vinte'
export const CURRENT_STREAK_TEXT = 'Di fila'
export const BEST_STREAK_TEXT = 'Tuo record'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Stai usando un browser incorporato in un'app (come WhatsApp o Facebook). Meglio aprire il gioco nel browser di sistema"

export const DATEPICKER_TITLE = 'Scegli una data passata'
export const DATEPICKER_CHOOSE_TEXT = 'Scegli'
export const DATEPICKER_TODAY_TEXT = 'oggi'
export const ARCHIVE_GAMEDATE_TEXT = 'Data del gioco'
