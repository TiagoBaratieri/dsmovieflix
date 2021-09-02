package com.tiagobaratieri.dsmovieflix.services;

import com.tiagobaratieri.dsmovieflix.dto.MovieDTO;
import com.tiagobaratieri.dsmovieflix.entities.Genre;
import com.tiagobaratieri.dsmovieflix.entities.Movie;
import com.tiagobaratieri.dsmovieflix.entities.Review;
import com.tiagobaratieri.dsmovieflix.repositories.GenreRepository;
import com.tiagobaratieri.dsmovieflix.repositories.MovieRepository;
import com.tiagobaratieri.dsmovieflix.repositories.ReviewRepository;
import com.tiagobaratieri.dsmovieflix.services.exeptons.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        Optional<Movie> obj = repository.findById(id);
        Movie movie = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        List<Review> reviews = reviewRepository.findAllByMovieId(movie.getId());
        return new MovieDTO(movie, reviews);
    }

    public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
        Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
        return repository.find(genre, pageRequest).map(x -> new MovieDTO(x));
    }
}