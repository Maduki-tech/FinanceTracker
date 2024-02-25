package de.schlueter;

/**
 * BaseDao
 */
public interface BaseDao<T> {
    T create(T t);
    T read(String id);
    T update(T t);
    void delete(String id);
}
