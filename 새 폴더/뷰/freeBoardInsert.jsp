<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<div>
		<h1>�����Խ���</h1>
	</div>
	<div style="width:650px;" align="right">
		<a href="./main.ino">����Ʈ��</a>
	</div>
	<hr style="width: 600px">
	
	<form action="./freeBoardInsertPro.ino">
		<div style="width: 150px; float: left;">�̸� :</div>
		<div style="width: 500px; float: left;" align="left"><input type="text" name="name"/></div>
		
		<div style="width: 150px; float: left;">���� :</div>
		<div style="width: 500px; float: left;" align="left"><input type="text" name="title"/></div>
	
		<div style="width: 150px; float: left;">���� :</div>
		<div style="width: 500px; float: left;" align="left"><textarea name="content" rows="25" cols="65"  ></textarea></div>
		<div align="right">
		<input type="submit" value="�۾���" onclilck="save">
		<script>
		function save(){
			window.location.hostname="rediret:freeBoardDetail.ino?num="
		}
		</script>
		<input type="button" value="�ٽþ���" onclick="#">
		 <input type="button" value="���" onclick="func_confirm()" />
        <script type="text/javascript">
        	function func_confirm () {
        		if(confirm('����ϰڽ��ϱ�?')){
        			location.href="./main.ino"
        		} else {
        			
        		}
        	}
        </script>
				&nbsp;&nbsp;&nbsp;
		</div>
	
	</form>
	
	
	
</body>
</html>