package com.tiagobaratieri.dsmovieflix.repositories;

import com.tiagobaratieri.dsmovieflix.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
