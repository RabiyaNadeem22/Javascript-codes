const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const LowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NumbersChars = "0123456789";
  const SymbolsChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? LowerCaseChars : "";
  allowedChars += includeUpperCase ? UpperCaseChars : "";
  allowedChars += includeNumbers ? NumbersChars : "";
  allowedChars += includeSymbols ? SymbolsChars : "";

 
  if(length<=0){
    return `(password length must be atleast 1)`;
  }

 for(let i=0;i<length;i++){
    const randomindex=Math.floor(Math.random()*allowedChars.length);
    password+=allowedChars[randomindex];
 }

  return password;
}

const password = generatePassword(
  passwordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
