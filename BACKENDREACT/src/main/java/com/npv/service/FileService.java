package com.npv.service;

import java.io.IOException;
import java.util.Date;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.npv.utils.FileManager;

@Service
public class FileService implements IFileService{
	
	private FileManager fileManager = new FileManager();
	
	//private String linkFolder = "E:\\VTI\\Rocket20\\Reactjs\\Buoi11\\public\\upload";
	
	private String linkFolder = "/Users/poppy/Rocket_27/ReactJs/finalexamreact/public/upload";

	@Override
	public String upLoadImage(MultipartFile image) throws IOException {
		String nameImage = new Date().getTime() + "." + fileManager.getFormatFile(image.getOriginalFilename());

		String path = linkFolder + "/" + nameImage;

		fileManager.createNewMultiPartFile(path, image);

		// TODO save link file to database

		// return link uploaded file
		return path;
	}

}
