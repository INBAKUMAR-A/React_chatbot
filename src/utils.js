export const analyze = (text) => {
    if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
        return 'Hai, How can i help you?';
    else if(text.includes('thank you'))
        return 'Thank you for contacting me'
    else if(text.includes('Replacement')|| text.includes('replacement') || text.includes('Return') || text.includes('return'))
        return 'Reason(Please choose it:)\nA)Damage product.\nB)Colour\nC)alter product\nD)other'
    else if(text.includes('A') || text.includes('B') || text.includes('C') || text.includes('D'))
    return 'Your Request has processed Successfully!!!';
    else  (text.includes(text >0 && text>10000000000))
    return 'Is this request for Replacement/Return.'
    return "I can't get you, Can you rephrase the message";
}