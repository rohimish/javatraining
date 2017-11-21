<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form class="collapse show" id="collapseRegistration" action="register.htm" method="POST" >
            <div class="form-group row">
                <label for="username" class="col-lg-4 offset-lg-1 col-form-label">Username:</label>
                <input type="text" class="form-control col-lg-6" name="username" id="username"/>
            </div>
            <div class="form-group row">
                <label for="fname" class="col-lg-4 offset-lg-1 col-form-label">First Name:</label>
                <input type="text" class="form-control col-lg-6" name="fname" id="fname"/>
            </div>
            <div class="form-group row">
                <label for="lname" class="col-lg-4 offset-lg-1 col-form-label">Last Name:</label>
                <input type="text" class="form-control col-lg-6" name="lname" id="lname"/>
            </div>
            <div class="form-group row">
                <label for="contact" class="col-lg-4 offset-lg-1 col-form-label">Contact Number:</label>
                <input type="text" class="form-control col-lg-6" name="contact" id="contact"/>
            </div>
            <div class="form-group row">
                <label for="email" class="col-lg-4 offset-lg-1 col-form-label">Email address:</label>
                <input type="email" class="form-control col-lg-6" name="email" id="email"/>
            </div>
            <div class="form-group row">
                <label for="pass" class="col-lg-4 offset-lg-1 col-form-label">Password:</label>
                <input type="password" class="form-control col-lg-6" name="pass" id="pass"/>
            </div>
            <div class="form-group row">
                <label for="repass" class="col-lg-4 offset-lg-1 col-form-label">Confirm Password:</label>
                <input type="password" class="form-control col-lg-6" name="repass" id="repass"/>
            </div>
            <input type="Submit" class="btn-success form-control col-lg-3 offset-lg-5" value="Submit"/>
        </form>
</body>
</html>