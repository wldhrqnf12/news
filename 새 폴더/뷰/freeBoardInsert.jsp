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
		<h1>자유게시판</h1>
	</div>
	<div style="width:650px;" align="right">
		<a href="./main.ino">리스트로</a>
	</div>
	<hr style="width: 600px">
	
	<form action="./freeBoardInsertPro.ino">
		<div style="width: 150px; float: left;">이름 :</div>
		<div style="width: 500px; float: left;" align="left"><input type="text" name="name"/></div>
		
		<div style="width: 150px; float: left;">제목 :</div>
		<div style="width: 500px; float: left;" align="left"><input type="text" name="title"/></div>
	
		<div style="width: 150px; float: left;">내용 :</div>
		<div style="width: 500px; float: left;" align="left"><textarea name="content" rows="25" cols="65"  ></textarea></div>
		<div align="right">
		<input type="submit" value="글쓰기" onclilck="save">
		<script>
		function save(){
			window.location.hostname="rediret:freeBoardDetail.ino?num="
		}
		</script>
		<input type="button" value="다시쓰기" onclick="#">
		 <input type="button" value="취소" onclick="func_confirm()" />
        <script type="text/javascript">
        	function func_confirm () {
        		if(confirm('취소하겠습니까?')){
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