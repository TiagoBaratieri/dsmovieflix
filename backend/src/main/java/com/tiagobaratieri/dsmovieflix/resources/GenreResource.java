package com.tiagobaratieri.dsmovieflix.resources;


import com.tiagobaratieri.dsmovieflix.dto.GenreDTO;
import com.tiagobaratieri.dsmovieflix.services.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/genres")
public class GenreResource {

    @Autowired
    private GenreService service;

    @GetMapping
    public ResponseEntity<List<GenreDTO>> findAll(){
        List<GenreDTO> listDTO = service.findAll();
        return ResponseEntity.ok().body(listDTO);
    }
}