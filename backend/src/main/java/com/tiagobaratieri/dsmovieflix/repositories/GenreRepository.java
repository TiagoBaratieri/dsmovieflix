package com.tiagobaratieri.dsmovieflix.repositories;

import com.tiagobaratieri.dsmovieflix.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {
}
