module.exports = function(lang){
  var la = {};
  switch (lang) {
    case 'en':
      la = {
        submit: 'Submit',
        login: 'Log in',
        lostyourpassword: 'Lost your password?',
        newtosite: 'New to site?',
        retrievepassword: 'Retrieve Password',
        login_form:'Login',
        username: 'Username',
        password: 'Password',
        passwordrestriction: 'Min 8 chars with atleast 1 upper, 1 lower letter, 1 number',
        confirmpassword: 'Confirm Password',
        create_account: 'Create Account',
        update_account: 'Update Account',
        update_password: 'Update Password',
        person_name: 'Contact Name',
        person_phone: 'Contact Phone ',
        person_id: 'Personal ID(Driver Lic)',
        business_name: 'Business Name',
        address: 'Address',
        city_suburb: 'City/Suburb',
        contactphone: 'Phone',
        businessrego: 'ABN',
        please_login: 'Hello - Please Login To Your Account',
        username_notfound: 'Username is not found',
        username_islocked: 'User is temporary locked please contact Admin',
        invalid_password:'Invalid password',
        username_istaken: 'Username is already taken..',
        ur_alreadyregister: 'Already registered',
        email_alreadyused: 'Email is already used',
        chkemail_confirm: "Please check your email to confirm that you have successfully registered.",
        chkemail_resetpwd: "Please check your email to verify password reset.",
        alreadyregister: "Already a member?",
        enteremail2retrievepassword: 'Enter your email to retrieve password',
        losspassword: 'Loss Password',
        loginwithtemporarypasswd: 'This is your temporary password, please login your account and change it.',
        warningemailchanged: 'Warning - your account Email has been changed.  Please ignore if it were you who made the change, if you think that your account has been hacked, please contact ikaraoke.vn@gmail.com',
        changedemail: 'Changed contact Email',
        enterusername:'Please enter your username.',
        enterpassword: 'Please enter your password',
        enternewpassword: 'Please enter the new password',
        password6charslong: 'Your password must be atleast 6 chars long',
        entername: 'Please enter contact person',
        enterbusinessname: 'Please enter your business name',
        enteremail: 'Please enter your email for contact',
        digitonly: 'Please enter 0-9 digits only',
        enterphone: 'Please enter your contact phone',
        enteraddress: 'Please enter your address',
        entercity: 'Please enter your city/suburb',
        enterbrego: 'Please enter your ABN',



















      }
    break;
    case 'vi':
      la = {
        submit: 'Nhập',
        login: 'Nhập tài khoản',
        lostyourpassword: 'Bị mất mật mã?',
        newtosite: 'Mới vào lần đầu?',
        retrievepassword: 'Tìm lại mật mã',
        login_form:'Nhập tài khoản',
        username: 'Tên tài khoản',
        password: 'Mật mã',
        passwordrestriction: 'Ít nhất 8 chữ, gồm 1 chữ hoa, 1 thường, và 1 số',
        confirmpassword: 'Lặp lại mật mă',
        create_account: 'Đăng ký tài khoãn',
        update_account: 'Chỉnh sữa tài khoãn',
        update_password: 'Chỉnh sữa mật mã',
        person_name: 'Tên người đại diện',
        person_id: 'Số CMND',
        person_phone: 'Điện thoại liên lạc',
        business_name: 'Tên doanh nghiệp',
        address: 'Địa chỉ',
        city_suburb: 'Quận/Huyện',
        contactphone: 'Điện thoại',
        businessrego: 'Mã số thuế',
        please_login: 'Xin vui lòng nhập mật mã vào tài khoản cũa Bạn',
        username_notfound: 'Tài khoãn không tồn tại',
        username_islocked: 'Tài khoãn bị khoá, xin liên lạc Admin',
        invalid_password:'Mật mã không đúng',
        username_istaken: 'Tên tài khoãn đã có người dùng',
        ur_alreadyregister: 'Bạn đã đăng ký',
        email_alreadyused: 'Email đã có người dùng',
        chkemail_confirm: "Làm ơn kiểm tra Email để xác định Bạn đã đăng ký thành công",
        chkemail_resetpwd: "Kiểm tra Email để xác định mật mã được đặt lại.",
        alreadyregister: "Đã đăng ký ?",
        enteremail2retrievepassword: 'Nhập Email để tìm lại mật mã',
        losspassword: 'Mất mật mã',
        loginwithtemporarypasswd: 'Đây là mật mã tạm OTP để Bạn nhập vào AntiFake, chỉ hiệu lực một lần sử dụng',
        warningemailchanged: 'Cảnh báo tài khoãn Email cũa Bạn bị thay đổi. Bạn không cần quan tâm nếu bạn chủ động làm việc này. Trường hợp Bạn nghĩ tài khoãn cũa mình bị hacked xin liên lạc ikaraoke.vn@gmail',
        changedemail: 'Thay đổi tài khoãn Email',
        enterusername:'Vui lòng nhập tên tài khoản.',
        enterpassword: 'Vui lòng nhập mật mã.',
        enternewpassword: 'Vui lòng nhập mật mã mới..',
        password6charslong: 'Mật mã phải có ít nhất 6 ký tự',
        entername: 'Vui lòng nhập tên người đại diện để liên lạc',
        enterbusinessname: 'Vui lòng nhập tên doanh nghiệp',
        enteremail: 'Vui lòng nhập địa chỉ Email',
        digitonly: 'Vui lòng chỉ nhập số 0-9',
        enterphone: 'Vui lòng nhập số điện thoại',
        enteraddress: 'Vui lòng nhập địa chỉ',
        entercity: 'Vui lòng nhập tên Quận/Huyện hay Thành Phố/Tỉnh',
        enterbrego: 'Vui lòng nhập số đăng ký doanh nghiệp hay số VAT',










      }
    break;
    case '':
    break;
    case '':
    break;
  }

  return la;

} //End of Module
