window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.interimResults = false;
recognition.continuous = false;
recognition.lang = 'en-US';

export default recognition;
