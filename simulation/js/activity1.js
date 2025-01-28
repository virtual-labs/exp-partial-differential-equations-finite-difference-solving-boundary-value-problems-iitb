let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">PDE: Finite difference solving boundary value problems</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'tb1-box');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
      $$ y^" -64y + ${a} = 0  $$
      $$ y(0) = y(1) = 1 $$
      $$ h=\\frac{1}{3} $$
      $$ y(1/3) = ?  $$
      $$ y(2/3) = ?  $$
      <br>
      <div id="act1-table1">
         <table class='table table-stripped'>
            <thead class='table-dark'>
               <th>Nodes</th>
               <th>0</th>
               <th>1</th>
               <th>2</th>
               <th>3</th>
            </thead>
            <tbody>
               <tr>
                  <th class='table-dark'> x </th>
                  <td>0</td>
                  <td>1/3</td>
                  <td>2/3</td>
                  <td>2</td>
               </tr>
               <tr>
                  <th class='table-dark'> y </th>
                  <td>1</td>
                  <td>?</td>
                  <td>?</td>
                  <td>1</td>
               </tr>
            </tbody>
         </table>
      </div>
      <br>
      <p style="text-align:left;" class="fs-18px fb-500">
         Using finite difference method,
      </p>
      <div>
         $$y^" = \\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} \\quad\\quad ...eq^n(1)$$
      </div>
      <br>
      <div>
         <p style="text-align:left;" class="fs-18px fb-500">
            Applying eq<sup>n</sup>(1) at Node 1,
         </p>
         <div id='act1-node1-eq'>
            <div class="row justify-content-center fs-18px" style="align-items:center;">
               <div class="col-md-3">
                  <input style="display:inline-block; width:80%; margin-right:5px;"  type='number'    id='y2-node1-inp' class='form-control fs-16px' />  y<sub>2</sub> +
               </div>
               <div class="col-md-3" style="display:inline-block;">
                  <input style="display:inline-block; width:80%; margin-right:5px;" type='number' id='y1-node1-inp' class='form-control fs-16px' /> y<sub>1</sub> = 
               </div>
               <div class="col-md-3">
                  <input style="display:inline-block; width:80%; margin-right:5px;" type='number' id='c-node1-inp' class='form-control fs-16px' />
               </div>
            </div>
            <br>
            <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_node1_equ();' id='act1-vf-btn1'>Verify</button>         
         </div>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
}
function a1_verify_node1_equ() {
    let y1_inp = (document.getElementById('y1-node1-inp'));
    let y2_inp = (document.getElementById('y2-node1-inp'));
    let c_inp = (document.getElementById('c-node1-inp'));
    console.log(y2_node_1, y1_node_1, c);
    if (!verify_values(parseFloat(y2_inp.value), parseFloat(y2_node_1.toFixed(3)))) {
        y2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y2_inp.style.border = '1px solid #ced4da';
        y2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(y1_inp.value), parseFloat(y1_node_1.toFixed(3)))) {
        y1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y1_inp.style.border = '1px solid #ced4da';
        y1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(c_inp.value), parseFloat(c.toFixed(3)))) {
        c_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        c_inp.style.border = '1px solid #ced4da';
        c_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-node1-eq'));
    let outer_div = (document.getElementById('tb1-box'));
    div.innerHTML = '';
    div.innerHTML = `
      $$ ${parseFloat(y2_node_1.toFixed(3))}y_2  ${parseFloat(y1_node_1.toFixed(3))}y_1 = ${parseFloat(c.toFixed(3))} \\quad\\quad ...eq^n(a)$$
   `;
    outer_div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;" class="fs-18px fb-500">
         Applying eq<sup>n</sup>(1) at Node 2,
      </p>
      <div id='act1-node2-eq'>
         <div class="row justify-content-center fs-18px" style="align-items:center;">
            <div class="col-md-3">
               <input style="display:inline-block; width:80%; margin-right:5px;"  type='number'    id='y2-node2-inp' class='form-control fs-16px' />  y<sub>2</sub> +
            </div>
            <div class="col-md-3" style="display:inline-block;">
               <input style="display:inline-block; width:80%; margin-right:5px;" type='number' id='y1-node2-inp' class='form-control fs-16px' /> y<sub>1</sub> = 
            </div>
            <div class="col-md-3">
               <input style="display:inline-block; width:80%; margin-right:5px;" type='number' id='c-node2-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_node2_equ();' id='act1-vf-btn2'>Verify</button>         
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_node2_equ() {
    let y1_inp = (document.getElementById('y1-node2-inp'));
    let y2_inp = (document.getElementById('y2-node2-inp'));
    let c_inp = (document.getElementById('c-node2-inp'));
    console.log(y2_node_2, y1_node_2, c);
    if (!verify_values(parseFloat(y2_inp.value), parseFloat(y2_node_2.toFixed(3)))) {
        y2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y2_inp.style.border = '1px solid #ced4da';
        y2_inp.disabled = true;
    }
    if (!verify_values(parseFloat(y1_inp.value), parseFloat(y1_node_2.toFixed(3)))) {
        y1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y1_inp.style.border = '1px solid #ced4da';
        y1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(c_inp.value), parseFloat(c.toFixed(3)))) {
        c_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        c_inp.style.border = '1px solid #ced4da';
        c_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-node2-eq'));
    let outer_div = (document.getElementById('tb1-box'));
    div.innerHTML = '';
    div.innerHTML = `
      $$  ${parseFloat(y2_node_2.toFixed(3))}y_2 + ${parseFloat(y1_node_2.toFixed(3))}y_1 = ${parseFloat(c.toFixed(3))} \\quad\\quad ...eq^n(b)$$
   `;
    outer_div.innerHTML += `
	<br>
	<div>
	   <p style="text-align:left;" class="fs-18px fb-500">
	      Solving eq<sup>n</sup>(a) & eq<sup>n</sup>(b) simultaneously,
	   </p>
      <div id="y1-y2-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$y_1 = $$
            </div>
            <div class="col-md-3">
               <input type='number' id='y1-inp' class='form-control fs-16px' />
            </div>
            <div class="col-md-2">
               $$y_2 = $$
            </div>
            <div class="col-md-3">
               <input type='number' id='y2-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_y1_y2();' id='act1-vf-btn3'>Verify</button>
         
      </div>
	</div>
	`;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_y1_y2() {
    let y1_inp = (document.getElementById('y1-inp'));
    let y2_inp = (document.getElementById('y2-inp'));
    console.log(y1, y2);
    if (!verify_values(parseFloat(y1_inp.value), parseFloat(y1.toFixed(3)))) {
        y1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y1_inp.style.border = '1px solid #ced4da';
        y1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(y2_inp.value), parseFloat(y2.toFixed(3)))) {
        y2_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y2_inp.style.border = '1px solid #ced4da';
        y2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('y1-y2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      $$
         y_1 = ${parseFloat(y1.toFixed(3))} \\quad y_2 = ${parseFloat(y2.toFixed(3))}
      $$
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='exp_completed();' id='act1-vf-btn3'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function internal_calculation1() {
    a = 0;
    c = 0;
    a = random1(8, 16);
    c = -a * Math.pow(h, 2) - 1;
    console.log('a', a);
    console.log('c', c);
    let matA = [
        [y2_node_1, y1_node_1],
        [y2_node_2, y1_node_2],
    ];
    let matC = [c, c];
    let matY = gauss(matA, matC);
    y1 = matY[0];
    y2 = matY[1];
    console.log(y1, y2);
}
function exp_completed() {
    let btn = (document.getElementById('act1-vf-btn3'));
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map