package ino.web.freeBoard.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ino.web.freeBoard.dto.FreeBoardDto;
import ino.web.freeBoard.dto.freeBoardReferenceDto;
import ino.web.freeBoard.mapper.FreeBoardMapper;

@Service
public class freeBoardReferenceService {

	@Autowired
	private static SqlSessionTemplate sqlSessionTemplate;
	
	public List ReferenceList1(){
		return sqlSessionTemplate.selectList("freeBoardReferenceGetList");
	}
	
	public List ReferenceList2(){
		return sqlSessionTemplate.selectList("freeBoardReferenceGetList2");
	}
	
	public void freeBoardReferencePro(freeBoardReferenceDto dto){
		sqlSessionTemplate.insert("freeBoardReferencePro",dto);
	}
	
	public static freeBoardReferenceDto getDetailByNum(int num){
		return sqlSessionTemplate.selectOne("referenceByNum", num);
	}

public void freeBoardReference(freeBoardReferenceDto dto) {		
		
}

	

	
}
