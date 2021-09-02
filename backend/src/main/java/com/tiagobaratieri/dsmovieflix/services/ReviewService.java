package com.tiagobaratieri.dsmovieflix.services;

import com.tiagobaratieri.dsmovieflix.dto.ReviewDTO;
import com.tiagobaratieri.dsmovieflix.entities.Movie;
import com.tiagobaratieri.dsmovieflix.entities.Review;
import com.tiagobaratieri.dsmovieflix.repositories.MovieRepository;
import com.tiagobaratieri.dsmovieflix.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository repository;

    @Autowired
    private MovieRepository movieRepository;

    @Transactional
    public ReviewDTO insert(ReviewDTO dto) {

        Movie movie = movieRepository.getOne(dto.getMovieId());

        Review review = new Review();
        review.setText(dto.getText());
        review.setMovie(movie);
        review = repository.save(review);
        return new ReviewDTO(review);
    }
}