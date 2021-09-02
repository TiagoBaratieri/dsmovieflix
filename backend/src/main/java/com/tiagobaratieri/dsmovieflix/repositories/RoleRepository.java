package com.tiagobaratieri.dsmovieflix.repositories;

import com.tiagobaratieri.dsmovieflix.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
