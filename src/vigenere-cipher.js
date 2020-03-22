// Vigenere cipher
//Our machine will have 2 modifications: direct and reverse (the type of machine is determined at the moment of creation). 
//The direct machine simply encodes and decodes the string that was transmitted to it, 
//and the reverse machine returns an inverted string after encoding and decoding.
// Your task is to implement the class VigenereCipheringMachine. 
//constructor of this class accepts true (or nothing) to create direct machine and false to create reverse machine. 
//Each instance of VigenereCipheringMachine must have 2 methods: encrypt and decrypt.
// encrypt method accepts 2 parameters: message (string to encode) and key (string-keyword).
// decrypt method accepts 2 parameters: encryptedMessage (string to decode) and key (string-keyword).
// These parameters for both methods are mandatory. If at least one of them has not been given, an Error must be thrown.
// You don't need to validate value sent to constructor and to encrypt and decrypt methods 
//(except throwing an Error on absence of argument for these methods).
//Ci=(Mi+Ki)%26
//Mi=(Ci-Ki)%26
class VigenereCipheringMachine {
    constructor(type) {
        this.type = true;
        if (type == false) this.type = false;
    }
    encrypt(message, key) {
        if (typeof message !== 'string' || typeof key !== 'string') {
            throw new UserError('wrong arguments');
        }

        let messagearr = message.toUpperCase().split('');
        let keyword = key.toUpperCase();
        let abc = '';
        for (let i = 65; i <= 90; i++) {
            abc += String.fromCodePoint(i);
        }
        let ABC = abc.split('');

        while (keyword.length < message.length) {
            keyword += keyword;
        }
        keyword = keyword.slice(0, message.length).split('');

        let res = [];
        for (let i = 0, j = 0; i < messagearr.length; i++) {
            if (/[A-Z]/.test(messagearr[i])) {
                //Ci=(Mi+Ki)%26
                let MIndex = ABC.indexOf(messagearr[i]);
                let KIndex = ABC.indexOf(keyword[j]);

                let a = MIndex + KIndex;
                let CIndex = a % 26;
                res.push(ABC[CIndex]);
                j++;
            }
            else {
                res.push(messagearr[i]);
            }
        }

        if (!this.type) {
            return res.reverse().join("");
        }
        else return res.join("");
    }

    decrypt(encryptedMessage, key) {
        if (typeof encryptedMessage !== 'string' || typeof key !== 'string') {
            throw new UserError('wrong arguments');
        }
        let encryptedMessagearr = encryptedMessage.toUpperCase().split('');
        let keyword = key.toUpperCase();
        let abc = '';
        for (let i = 65; i <= 90; i++) {
            abc += String.fromCodePoint(i);
        }
        let ABC = abc.split('');

        while (keyword.length < encryptedMessage.length) {
            keyword += keyword;
        }
        keyword = keyword.slice(0, encryptedMessage.length).split('');

        let res = [];
        for (let i = 0, j = 0; i < encryptedMessagearr.length; i++) {
            if (/[A-Z]/.test(encryptedMessagearr[i])) {
                //Mi=(Ci-Ki)%26
                let CIndex = ABC.indexOf(encryptedMessagearr[i]);
                let KIndex = ABC.indexOf(keyword[j]);

                if (CIndex < KIndex) {
                    let MIndex = 26 + (CIndex - KIndex);
                    res.push(ABC[MIndex]);
                }
                else {
                    let MIndex = (CIndex - KIndex) % 26;
                    res.push(ABC[MIndex]);
                }
                j++;

            }
            else res.push(encryptedMessagearr[i]);
        }
        if (!this.type) {
            return res.reverse().join("");
        }
        else return res.join("");
    }

}

module.exports = VigenereCipheringMachine;
