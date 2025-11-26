---
{"publish":true,"created":"2025-11-22T23:02:14.700+02:00","modified":"2025-11-24T13:31:59.587+02:00","published":"2025-11-24T13:31:59.587+02:00","tags":["תואר","אלגברה"],"cssclasses":"","uni_subjects":["אלגברה"]}
---


# הגדרה
עבור $a,n \in \mathbb{N}$ נגדיר 
השארית בחלוקת $a$ ב$n$ = $a(mod~n)$
$17\equiv 2\left( mod~3 \right)$
$2013 \equiv 1\left( mod~4 \right)$
# הגדרה כשדה
$\mathbb{Z}_{n}=\left\{ 0,1,2,\dots,n-1 \right\}$ שהן כל השאריות האפשריות בחלוקה ב-$n$ כ[[תואר/קבוצה]] (נשים לב שהקבוצה לא סגורה לחיבור וכפל הסטנדרטים שאנחנו מכירים)
על מנת להוכיח שאפשר להגדיר את $\mathbb{Z}_{n}$ כ[[תואר/שדה]] נבדוק שהקבוצה עונה על כל הדרישות
1. הקבוצה סגורה תחת חיבור וכפל מודולו n
2. אסוציאטיביות וקומוטטיביות
3. 0 אדיש חיבורי
4. קיים נגדי: לכל$0 \neq a \in Z_{n}$ מתרחש $a+(n-a)=0\left( mod~n \right)$, לגבי 0 הנגדי שלו הוא 0
5. 1 אדיש כפלי
6. קיום הופכי - **לא תמיד**
ולכן $\mathbb{Z}_{n}$ שדה רק אם לכל $0\neq a \in \mathbb{Z}_{n}$ יש הופכי
# משפט
$\mathbb{Z}_{n}$ שדה $n \iff$ ראשוני
## הוכחה
ראשית נניח צד אחד של הטענה $\impliedby$
נניח ש$n$ לא ראשוני, נוכיח ש$\mathbb{Z}_{n}$ לא שדה

נגדיר:
$n = k \cdot m, 1<k<n, 1 < m<n$
שבהכרח אפשרי כי אמרנו שזה ל$n$ פריק
נראה ש$k,m \in \mathbb{Z}_{n}$ מה שאומר ש$k \cdot m = 0 \left( mod~n \right)$ 
מה שאומר שאו ש$k=0$ או ש$m=0$ כלומר סתירה
הראינו שאם $n$ לא ראשוני אז $\mathbb{Z}_{n}$ לא שדה
עכשיו נוכיח שאם $n$ כן ראשוני אז $\mathbb{Z}_{n}$ שדה ($\implies$)

יהי $n$ ראשוני. צ"ל $\mathbb{Z}_{n}$ שדה
יהי $0 \neq a \in \mathbb{Z}_{n}$ מחפשים $b \in \mathbb{Z}_{n}$ כך ש $a \cdot b =1$ (כש$\cdot$ זה כפל במודולו $n$)
נגדיר $A=\left\{ a \cdot 1, a \cdot 2, a \cdot 3,\dots,a \cdot (n-1) \right\}$
צ"ל $1 \in A$
נראה ש$A \subseteq \mathbb{Z}_{n}$
כל איבר ב$A$ הוא כפולת מודולו בין  שני איברים שנמצאים ב$\mathbb{Z}_{n}$ ולכן נמצא ב$\mathbb{Z}_{n}$ (אמרנו שקבוצת $\mathbb{Z}_{n}$ סגורה תחת מודולו $n$) מה שאומר ש$A \subset \mathbb{Z}_{n}$, נראה ש$A$ זהה ל$\mathbb{Z}_{n}$ ללא אפס
נניח בשלילה שקיימים שני איברים ב$A$ ששווים אחד לשני
לכן קיימים $n-1\geq c_{1}>c_{2}\geq 1$ כך ש$a\cdot c_{1} = a \cdot c_{2}$
נכתוב $a\cdot(c_{1} - c_{2})=0$
מכיוון ש$n$ ראשוני אז הוא בהכרח מחלק את $a$ או את $\left( c_{1} - c_{2} \right)$ 
אבל $n$ לא יכול לחלק את $a$ שכן $n-1\geq a\geq 1$ וגם לא את $(c_{1}- c_{2})$ כי $n-1\geq \left( c_{1}-c2 \right)\geq_{1}$
ולכן קיבלנו סתירה
מה שאומר ב $A$ יש $n-1$ איברים שונים שאינם 0. אותה כמות איברים שיש ב$\mathbb{Z}_{n} \setminus \left\{ 0 \right\}$ (ואנחנו יודעים ש$A$ גם ככה מוכלת בה) וזה מראה ש$1 \in A$
# דוגמה
$17(mod~3)=2$ כי $17=3 \cdot 5+2$
# משפטים
1.
$$
\begin{gather}
a,b \in \mathbb{N} \\
(a+b)\left( mod~n  \right) =(a\left( mod~n \right) +b\left( mod~n \right))\left( mod~n \right)
\end{gather}
$$
2.
$$
\begin{gather}
a,b \in \mathbb{N} \\
\left( a \cdot b \right) \left( mod~n \right) =\left( a \left( mod~n \right)  \right) \left( b\left( mod~n \right)  \right) \left( mod~n \right) 
\end{gather}
$$
## הוכחה
נסמן $a \left( mod~n \right)=r_{1}$ ו$b\left( mod~n \right)=r_{2}$
שקיימים $q_{1},q_{2} \in \mathbb{N}$ (או אפס) כך ש$a=q_{1} \cdot n + r_{1}$ ו$b=q_{2}\cdot n+r_{2}$
ניתן לכתוב ש$\left( a+b \right)=\left( q_{1}+q_{2} \right)n+r_{1}+r_{2}$
ואם נעשה על שני החלקים $mod~n$ נקבל ש$\left( a+b \right)=\left( r_{1}+r_{2} \right)\left( mod~n \right)$

> [!NOTE] נשים לב
> הסיבה ש$\left( q_{1}+q_{2} \right)n$ נעלם היא שמדובר בכפולה של $n$ ולכן המודולו של הביטוי הזה הוא 0

עם אותן הגדרות ראשונות נכתוב גם $\left( a \cdot b \right)= q_{1}q_{2}n^{2}+q_{1}nr_{2}+r_{1}q_{2}n+r_{1}r_{2}$
גם כאן אם נפעיל $mod~n$ על שני הצדדים כל ביטוי שכולל כפולה ב$n$ יעלם ויצא לנו
$\left( a \cdot b \right)=r_{1}r_{2}$