    "use strict"

    const $tbody = document.querySelector('tbody');
    const $delbtn = document.querySelector(".delbtn");
    const $sno = document.querySelector('.innumber');
    const $addBtn = document.querySelector('#addBtn');
    const $inputtext = document.querySelector('.inputtext'); 
    


    let students = JSON.parse(localStorage.getItem("학생정보")) || [];

    function up(khj){
        let AllStudents=null;
             if(khj){
              AllStudents = khj
            }else{
              AllStudents = [...students].sort((a,b)=>b.sum - a.sum);
            }
        // let AllStudents = [...students].sort((a,b)=>b.sum - a.sum);

        // 순위값
        AllStudents.map((student,idx)=>{
            student.num = idx +1;
        })


        $tbody.innerHTML = '';

        
        // 출력
        AllStudents.map((student)=>{
            const $tr = document.createElement('tr');
            $tr.innerHTML=`
            <td>#${student.sno}</td>
            <td>${student.name}</td>
            <td>${student.kor}점</td>
            <td>${student.eng}점</td>
            <td>${student.math}점</td>
            <td>${student.sum}점</td>
            <td>${student.avg}점</td>
            <td>${student.num}위</td>
            ` ;
            $tbody.append($tr);
        })
    };
    up();

    //등록
    $addBtn.addEventListener("click",e=>{
        students = JSON.parse(localStorage.getItem("학생정보")) || [];
        up();
    })

        
        //검색
    document.querySelector('.btnon').addEventListener("click",e=>{
        let inputtexts = $inputtext.value.trim();
        const filterstudent = [...students].filter(student => student.name === inputtexts);
        up(filterstudent);
    })

    //삭제
    $delbtn.addEventListener("click",e=>{
        const delsno = $sno.value.trim();
        const delgo = [...students].find(student=>student.sno === delsno );
        if(delgo){
            const delfilter = [...students].filter(student => student.sno !== delgo.sno);
            localStorage.setItem("학생정보",JSON.stringify(delfilter));
            up(delfilter);
        }else{
            alert("학생 정보 없음")
        }
    }) 

    //정렬
    document.getElementById('sortSelect').addEventListener('change',e=>{
        const sortSelect = document.getElementById('sortSelect');
        let sortStudents = [...students];
        if(sortSelect.value == "ssn"){
            sortStudents.sort((a,b)=>a.sno-b.sno);
        }else if(sortSelect.value == "name"){
            sortStudents.sort((a,b)=>a.name.localeCompare(b.name));
        }else if(sortSelect.value == "kor"){
            sortStudents.sort((a,b)=>b.kor - a.kor);
        }else if(sortSelect.value == "eng"){
            sortStudents.sort((a,b)=>b.eng - a.eng);
        }else if(sortSelect.value == "math"){
            sortStudents.sort((a,b)=>b.math - a.math);
        }else{
            sortStudents.sort((a,b)=>b.sum - a.sum);
        }
        up(sortStudents);
    });









/* import { Student } from "./Student.js";
import { StudentRepository } from "./student-repository.js";
import { EventHandler } from "./event-handler.js";

let studentRepository = new StudentRepository();
// 테스트를 위한 더미데이터 입력
studentRepository.addStudent(new Student(10, '김기정', 90, 80, 60));
studentRepository.addStudent(new Student(11, '최기정', 100, 90, 90));
studentRepository.addStudent(new Student(12, '박기정', 92, 82, 80));
studentRepository.addStudent(new Student(13, '최기정', 95, 85, 88));

document.querySelector(".innumber")

let eventHandler = new EventHandler();
eventHandler.eventRegist();



export {studentRepository} */
