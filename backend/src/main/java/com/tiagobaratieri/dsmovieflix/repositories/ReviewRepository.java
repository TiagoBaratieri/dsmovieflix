package com.tiagobaratieri.dsmovieflix.repositories;

import com.tiagobaratieri.dsmovieflix.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
}
