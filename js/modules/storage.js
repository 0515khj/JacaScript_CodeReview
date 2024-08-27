
const $addBtn = document.querySelector('#addBtn');
const $sno = document.querySelector('.innumber');
const $sname = document.querySelector('.inname');
const $kor = document.querySelector('.inkor');
const $eng = document.querySelector('.ineng');
const $math = document.querySelector('.inmath');
const $tbody = document.querySelector('tbody');
const $input = document.querySelectorAll('input[type="number"]');

/* // 1. 로컬 스토리지에서 데이터 가져오기
let studentData = localStorage.getItem('학생정보');

// 2. JSON 형태로 파싱
let students = JSON.parse(studentData);

// 3. 빈 값이 포함된 항목을 찾고 제거
students = students.filter(student => student.sno !== "" && student.name !== "");

// 4. 수정된 데이터를 다시 JSON 문자열로 변환하여 로컬 스토리지에 저장
localStorage.setItem('학생정보', JSON.stringify(students));
 */



let students = JSON.parse(localStorage.getItem("학생정보")) || [];

$addBtn.addEventListener("click",e=>{
    if($sno.value !== ""){
        if(!students.find(a=>a.sno === $sno.value )){
            let sum = +$kor.value + +$eng.value + +$math.value;
            let avg = Math.floor(sum / 3);
        
            const stu = {
                sno: $sno.value,
                name: $sname.value,
                kor: $kor.value,
                eng: $eng.value,
                math: $math.value,
                sum: sum,
                avg: avg,
            }

            $sno.value= "";
            $sname.value= "";
            $kor.value= "";
            $eng.value= "";
            $math.value= "";

            students.push(stu);
        
            localStorage.setItem("학생정보",JSON.stringify(students))
        } // 중복

        } // 빈값
})
