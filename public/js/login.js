(() => {
  "use strict";

  const CSS = `
    *{box-sizing:border-box}body{margin:0;min-height:100vh;font-family:Segoe UI,Arial,sans-serif;background:linear-gradient(135deg,#1d3557,#457b9d,#e63946);display:flex;align-items:center;justify-content:center;padding:20px;color:#212529}.card{width:100%;max-width:500px;background:#fff;border-radius:24px;padding:30px;box-shadow:0 24px 70px rgba(0,0,0,.28)}.brand{text-align:center;margin-bottom:22px}.logo{font-size:54px}.brand h1{margin:5px 0;color:#1d3557}.brand p{margin:0;color:#6c757d}.tabs{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:16px}.tabs button{border:0;padding:10px;border-radius:9px;background:#eef1f4;cursor:pointer;font-weight:700;color:#1d3557}.tabs button.active{background:#e63946;color:#fff}.group{margin-bottom:13px}.group label{display:block;font-weight:700;font-size:14px;margin-bottom:6px;color:#1d3557}.group input{width:100%;padding:12px;border:1px solid #dee2e6;border-radius:10px;font:inherit;outline:none}.group input:focus{border-color:#457b9d;box-shadow:0 0 0 3px rgba(69,123,157,.15)}.hidden{display:none!important}.submit{width:100%;border:0;padding:12px;border-radius:10px;background:#e63946;color:#fff;font-weight:800;font-size:15px;cursor:pointer}.submit:disabled{opacity:.65;cursor:wait}.msg{min-height:22px;text-align:center;margin:10px 0;font-size:13px;font-weight:700}.switch{text-align:center;margin-top:15px;color:#6c757d;font-size:14px}.link{color:#e63946;font-weight:800;cursor:pointer}.demo{margin-top:18px;padding:14px;background:#f8f9fa;border-radius:11px;font-size:12px;line-height:1.8;color:#495057}.footer{text-align:center;margin-top:18px;color:#6c757d;font-size:12px}
    @media(max-width:600px){.card{padding:22px}.tabs{grid-template-columns:1fr 1fr}.logo{font-size:46px}}
  `;

  const DEMO_USERS = [
    {id:1,name:"Nguyễn Văn An",identifier:"22123456",email:"an@truong.edu.vn",phone:"0912345678",password:"sv123",role:"student"},
    {id:2,name:"Trần Thị Bình",identifier:"gv@truong.edu.vn",email:"gv@truong.edu.vn",phone:"0987654321",password:"gv123",role:"lecturer"},
    {id:3,name:"Nhân viên Căng tin",identifier:"staff@canteen.vn",email:"staff@canteen.vn",phone:"0900000001",password:"staff123",role:"staff"},
    {id:4,name:"Quản trị viên",identifier:"admin@canteen.vn",email:"admin@canteen.vn",phone:"0900000002",password:"admin123",role:"admin"}
  ];

  let mode="student";
  const $=id=>document.getElementById(id);
  const readState=()=>{try{return JSON.parse(localStorage.getItem("smartCanteenState")||"{}")||{}}catch{return {}}};

  function saveSession(user){
    const data=readState();
    data.users=Array.isArray(data.users)?data.users:[];
    for(const demo of DEMO_USERS){
      const i=data.users.findIndex(u=>u.identifier===demo.identifier||u.email===demo.email);
      if(i>=0)data.users[i]={...demo,...data.users[i]};else data.users.push({...demo});
    }
    data.currentUser={...user};
    localStorage.setItem("smartCanteenState",JSON.stringify(data));
    localStorage.setItem("smartCanteenDemoUser",JSON.stringify(user));
    localStorage.setItem("currentUser",JSON.stringify(user));
    localStorage.setItem("smartCanteenLoggedIn","true");
  }

  function setMode(next){
    mode=next;
    document.querySelectorAll(".tabs button").forEach(b=>b.classList.toggle("active",b.dataset.mode===next));
    const guest=next==="guest";
    $("identifierLabel").textContent=guest?"Số điện thoại":next==="student"?"MSSV / Email":next==="lecturer"?"Email":"Email nhân viên / admin";
    $("identifier").placeholder=guest?"Nhập số điện thoại":"Nhập thông tin đăng nhập";
    $("passwordGroup").classList.toggle("hidden",guest);
    $("otpGroup").classList.toggle("hidden",!guest);
    $("password").required=!guest;
    $("otp").required=guest;
  }

  function showMessage(text,error=true){$("message").textContent=text;$("message").style.color=error?"#dc3545":"#198754"}

  function login(event){
    event.preventDefault();
    const identifier=$("identifier").value.trim();
    let user=null;
    if(mode==="guest"){
      const phone=identifier.replace(/\D/g,"");
      if(!/^\d{10,11}$/.test(phone))return showMessage("Số điện thoại phải có 10–11 chữ số.");
      if($("otp").value.trim()!=="123456")return showMessage("OTP không đúng. Hãy nhập 123456.");
      user={id:"guest-"+Date.now(),name:"Khách "+phone.slice(-4),identifier:phone,phone,role:"guest"};
    }else{
      const pass=$("password").value;
      const stored=readState();const users=Array.isArray(stored.users)?stored.users:[];const found=users.find(u=>(u.identifier?.toLowerCase()===identifier.toLowerCase()||u.email?.toLowerCase()===identifier.toLowerCase())&&u.password===pass);
      if(!found)return showMessage("Tài khoản hoặc mật khẩu không đúng.");
      if(found.active===false)return showMessage("Tài khoản đang bị tạm khóa. Vui lòng liên hệ quản trị viên.");
      if(mode==="student"&&found.role!=="student")return showMessage("Hãy dùng tài khoản sinh viên.");
      if(mode==="lecturer"&&found.role!=="lecturer")return showMessage("Hãy dùng tài khoản giảng viên.");
      if(mode==="staffadmin"&&!['staff','admin'].includes(found.role))return showMessage("Hãy dùng tài khoản nhân viên hoặc admin.");
      user={...found};
    }
    saveSession(user);
    $("loginBtn").disabled=true;
    $("loginBtn").textContent="Đang mở trang chính...";
    showMessage("Đăng nhập thành công!",false);
    window.location.replace("./app.html?login=1&v="+Date.now());
  }

  function register(event){
    event.preventDefault();
    const name=$("regName").value.trim(),email=$("regEmail").value.trim().toLowerCase(),phone=$("regPhone").value.trim(),studentId=$("regStudentId").value.trim(),password=$("regPassword").value;
    if(!name||!email||!phone||password.length<6)return showMessage("Vui lòng nhập đầy đủ thông tin hợp lệ.");
    const data=readState();data.users=Array.isArray(data.users)?data.users:[];
    if(data.users.some(u=>u.email?.toLowerCase()===email||(studentId&&u.identifier===studentId)))return showMessage("Email hoặc MSSV đã tồn tại.");
    const user={id:"u-"+Date.now(),name,email,phone,identifier:studentId||email,password,role:studentId?"student":"guest"};
    data.users.push(user);localStorage.setItem("smartCanteenState",JSON.stringify(data));saveSession(user);window.location.replace("./app.html?login=1&v="+Date.now());
  }

  function render(){
    const style=document.createElement("style");style.textContent=CSS;document.head.appendChild(style);
    document.body.innerHTML=`<main class="card"><div class="brand"><div class="logo">🍜</div><h1>Smart Canteen</h1><p>Hệ thống đặt món thông minh</p></div><section id="loginView"><div class="tabs"><button data-mode="student">Sinh viên</button><button data-mode="lecturer">Giảng viên</button><button data-mode="guest">Khách</button><button data-mode="staffadmin">Nhân viên / Admin</button></div><form id="loginForm"><div class="group"><label id="identifierLabel">MSSV / Email</label><input id="identifier" autocomplete="username" required></div><div class="group" id="passwordGroup"><label>Mật khẩu</label><input id="password" type="password" autocomplete="current-password"></div><div class="group hidden" id="otpGroup"><label>Mã OTP</label><input id="otp" maxlength="6" inputmode="numeric" placeholder="123456"></div><button class="submit" id="loginBtn" type="submit">Đăng nhập</button><div class="msg" id="message"></div></form><div class="switch">Chưa có tài khoản? <span class="link" id="showRegister">Đăng ký ngay</span></div><div class="demo"><b>Tài khoản demo</b><br>• Sinh viên: <b>22123456 / sv123</b><br>• Giảng viên: <b>gv@truong.edu.vn / gv123</b><br>• Nhân viên: <b>staff@canteen.vn / staff123</b><br>• Admin: <b>admin@canteen.vn / admin123</b><br>• Khách: SĐT + OTP <b>123456</b></div></section><section id="registerView" class="hidden"><h2 style="color:#1d3557">Tạo tài khoản</h2><form id="registerForm"><div class="group"><label>Họ và tên *</label><input id="regName" required></div><div class="group"><label>Email *</label><input id="regEmail" type="email" required></div><div class="group"><label>Số điện thoại *</label><input id="regPhone" required></div><div class="group"><label>MSSV (nếu là sinh viên)</label><input id="regStudentId"></div><div class="group"><label>Mật khẩu *</label><input id="regPassword" type="password" minlength="6" required></div><button class="submit" type="submit">Đăng ký</button></form><div class="switch">Đã có tài khoản? <span class="link" id="showLogin">Đăng nhập</span></div></section><div class="footer">© 2026 Smart Canteen</div></main>`;
    document.querySelectorAll(".tabs button").forEach(b=>b.addEventListener("click",()=>setMode(b.dataset.mode)));
    $("loginForm").addEventListener("submit",login);
    $("registerForm").addEventListener("submit",register);
    $("showRegister").addEventListener("click",()=>{$("loginView").classList.add("hidden");$("registerView").classList.remove("hidden")});
    $("showLogin").addEventListener("click",()=>{$("registerView").classList.add("hidden");$("loginView").classList.remove("hidden")});
    setMode("student");
  }

  render();
})();
