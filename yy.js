بالتأكيد، إليك الكود بعد تصحيح الأخطاء:

```javascript
let ff = document.getElementById("ff");
let y = document.getElementById("yy");

function f() {
  let v = document.getElementById("vv").value;
  ff.innerText = v;
  
  let hgft = Math.floor(Math.random() * 11) + 1; 
  console.log(hgft);
  
  if (hgft == 1) {
    y.innerText = "اخر العنقود";
  } else if (hgft == 2) {
    y.innerText = "المحبوب";
  } else if (hgft == 3) {
    y.innerText = "الي ما عنده سالفه";
  } else if (hgft == 4) {
    y.innerText = "اصرف عليهم";
  } else if (hgft == 5) {
    y.innerText = "عنصري";
  } else if (hgft == 6) {
    y.innerText = "الي بس ياكل";
  } else if (hgft == 7) {
    y.innerText = "سواق البيت";
  } else if (hgft == 8) {
    y.innerText = "مسبب إزعاج";
  } else if (hgft == 9) {
    y.innerText = "دلوع البيت";
  } else if (hgft == 10) {
    y.innerText = "متبنينك";
  } else {
    y.innerText = "الحرامي";
  }
}
```

هذا يجب أن يكون الكود الصحيح بعد التعديلات.