package ino.web.freeBoard.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.mybatis.spring.annotation.MapperScan;

import ino.web.freeBoard.dto.freeBoardReferenceDto;

public interface freeBoardReference {
	
	  @Select("SELECT NUM, TITLE, NAME, TO_CHAR(REGDATE,'YYYY-MM-DD') REGDATE, CONTENT FROM REFERENCE ORDER BY LPAD( NUM, 5 ) DESC")
	  public freeBoardReferenceDto freeBoardReferenceGetList2();
	
}