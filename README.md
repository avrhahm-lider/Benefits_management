# Benefits_management

## בחירת בסיס נתונים
### welf record in supaBase 
הסיבה שבחרתי את זה כי הישות הזאת מכילה נותון אי רלציוני של פרטים על הסוג ההטבה ולכן נהוג לשהתמש בבסיס לא רלציוני
### budget allocation and spend transaction in mongodb
בחרתי להשמש בבסי רלציוני כי המידע שאני מרבל בעבור הישות הזאת היא סכמתית כלומר חייב לכולול ערך גם עם זה כלום 

## תוכנית הרצה  
יש להוריד את הפרויקט למחשב
```
git clone https://github.com/avrhahm-lider/Benefits_management.git
לנתב על התיקיה ולהריץ 
```
npm i
```
יש ליצור קובץ envשיכיל את השדות הבאים 
```
MONGO_URI=קישור לMONGODB
SUPA_BASE_URL=קישור ל SUPABASE
SUPA_BASE_KEY=מכיל את הAPIKEY_SECRET
PORT=מספר הפורט
```
ואז להריץ בשביל להריץ את השרת
```
npm start
```
בשביל להריץ את הטסטים
```
npm test
```
