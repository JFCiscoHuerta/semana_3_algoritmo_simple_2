function calcularEdadesEn2055(edadBEn2008) {
    const añosTranscurridos = 2055 - 2008;
    const edadAEn2008 = edadBEn2008 / 2;

    const edadAEn2055 = edadAEn2008 + añosTranscurridos;
    const edadBEn2055 = edadBEn2008 + añosTranscurridos;

    return {
        edadA: edadAEn2055,
        edadB: edadBEn2055
    };
}

const edades2055 = calcularEdadesEn2055(12);
console.log(`Edad A en 2055 será: ${edades2055.edadA}`);
console.log(`Edad B en 2055 será: ${edades2055.edadB}`);


function esMultiploDe8y7(numero) {
    return (numero % 8 === 0 && numero % 7 === 0)
        ? `El número ${numero} es múltiplo de 8 y 7.`
        : `El número ${numero} NO es múltiplo de 8 y 7.`;
}

const numero = 168;
console.log(esMultiploDe8y7(numero));
