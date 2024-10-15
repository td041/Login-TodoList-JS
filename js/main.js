let apiUser = "http://localhost:3000/user";

const handleLogin = (data) => {
  const username = document.querySelector(".input-login-username").value;
  const password = document.querySelector(".input-login-password").value;

  const user = data.find((user) => user.username === username && user.password === password);

  if (user) {
    alert("Đăng nhập thành công");
    window.location.href = "todolist.html";
  } else {
    alert("Đăng nhập không thành công. Vui lòng kiểm tra thông tin của bạn.");
  }
};
const getUser = (callback) => {
  fetch(apiUser)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(callback)
    .catch((error) => {
      console.error("Error fetching user:", error);
      alert("Không thể lấy dữ liệu người dùng. Vui lòng thử lại sau.");
    });
};
document.querySelector(".signup-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form
  signup();
});

const createUser = (data) => {
  fetch(apiUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(() => {
      alert("Đăng ký thành công");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Đăng ký không thành công. Vui lòng thử lại.");
    });
};
const signup = () => {
  const username = document.querySelector(".input-signup-username").value;
  const password = document.querySelector(".input-signup-password").value;

  // Kiểm tra thông tin đầu vào
  if (!username || !password) {
    alert("Vui lòng nhập cả tên đăng nhập và mật khẩu.");
    return;
  }

  let user = {
    username: username,
    password: password,
  };
  createUser(user);
};

document.querySelector(".login-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form
  getUser(handleLogin);
});
