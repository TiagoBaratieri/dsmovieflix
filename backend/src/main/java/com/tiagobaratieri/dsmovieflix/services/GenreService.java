package com.tiagobaratieri.dsmovieflix.services;

import com.tiagobaratieri.dsmovieflix.dto.GenreDTO;
import com.tiagobaratieri.dsmovieflix.entities.Genre;
import com.tiagobaratieri.dsmovieflix.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GenreService {

    @Autowired
    private GenreRepository repository;

    @Transactional(readOnly = true)
    public List<GenreDTO> findAll() {
        List<Genre> list = repository.findAll();
        List<GenreDTO> listDTO = list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
        return listDTO;
    }
}