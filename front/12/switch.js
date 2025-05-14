let dateBirth = 1990

//Quiero saber a que generacion pertenece una persona segun su año de nacimiento

switch (true) {
    case ((dateBirth >= 1920) && (dateBirth <= 1945)): 
    console.log("Generacion silenciosa")        
        break;
    case ((dateBirth >= 1946) && (dateBirth <= 1964)): 
    console.log("Baby Boomer")        
        break;
    case ((dateBirth >= 1965) && (dateBirth <= 1979)): 
    console.log("Generacion X")        
        break;
    case ((dateBirth >= 1980) && (dateBirth <= 2000)): 
    console.log("Generacion Y")        
        break;
    case ((dateBirth >= 2001) && (dateBirth <= 2010)): 
    console.log("Generacion Z")        
        break;
    default:
        console.log("No existe")
        break;
}
