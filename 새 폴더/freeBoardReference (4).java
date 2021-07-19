package ino.web.freeBoard.dto;

import org.apache.ibatis.type.Alias;


@Alias("freeBoardReferenceDto")
public class freeBoardReferenceDto {

	private int num;
	private String title;
	private String name;
	private String regdate;
	private String content;
	private int readcnt;
	
	public freeBoardReferenceDto() {}
	
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getReadcnt() {
		return readcnt;
	}
	public void setReadcnt(int readcnt) {
		this.readcnt = readcnt;
	}

	@Override
	public String toString() {
		return "freeBoardReferenceDto [num=" + num + ", title=" + title + ", name=" + name + ", regdate=" + regdate
				+ ", content=" + content + ", readcnt=" + readcnt + "]";
	}
	
}