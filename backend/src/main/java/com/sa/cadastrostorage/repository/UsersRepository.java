package com.sa.cadastrostorage.repository;
import com.sa.cadastrostorage.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
}
