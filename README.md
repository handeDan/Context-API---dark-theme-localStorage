# **CONTEXT API:**
- React’ın kendisinde olan, props drilling’e karşı geliştirilen, Redux alternatifi, veri paylaşımı yapmamızı sağlayan uygulama genelinde bir state’tir.
- Versiyon 16 itibariyle React içinde gömülü gelir, ek kurulum gerekmez.
- Birçok component’in aynı veriye ihtiyacı olduğunda, bu veriyi her componente tek tek props olarak geçirmek yerine, Context API ile merkezi bir şekilde yönetebiliriz.
- Karmaşık web siteleri için uygun değildir. Basit verileri yönetirken tercih edilmeli.(theme, language, currency.. gibi)
- Karmaşık web siteleri için Redux tercih edilebilir.
- Props drilling: State/değerlerin ağaçta yukarıdan aşağıya (parent => child => grandchild) taşınmasıdır.
- Props drilling ile gereksiz kod yazımı, gereksiz ram tüketimi olur, yönetimi zordur. 

## **KULLANIMI:** 
***createContext:**
- Bir context oluşturmamızı sağlayan methoddur.
import React, { createContext } from 'react'; 

export const ThemeContext= createContext();

***Provider:**
- Context’in sağlanacağı bir Provider oluşturuyoruz.
- MyContext.Provider ile, context'e değer olarak bir obje ({ value, setValue }) sağlıyoruz.
- Bu veri, MyContext'i tüketen component’ler tarafından kullanılabilecek.

import React, { createContext, useState } from 'react'; 

export const ThemeContext= createContext();

export const UserContextProvider= ({ children }) => {
const [theme, setTheme] = useState(); 

return ( 
<UserContext.Provider value={{ theme, setTheme }}> 
{children}
 </UserContext.Provider> 
); 
};

***useContext:**
- Provide edilen context'in value’larını almak için kullanılan daha pratik ve daha çok tercih edilen yöntemidir.
- Context.Consumer ile çalışırken yazılacak olan uzun kodu basitleştirir ve daha temiz bir çözüm sağlar.

import React, { useContext } from 'react';

const MyComponent = () => {
  // 1. useContext kullanarak context değerini alıyoruz
  const { value, setValue } = useContext(ThemeContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('Yeni Değer')}>Değeri Güncelle</button>
    </div>
  );
};