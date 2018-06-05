package ru.gpsbox.pond.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

import ru.gpsbox.pond.domain.enumeration.StockCase;

/**
 * A LiveStock.
 */
@Document(collection = "live_stock")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "livestock")
public class LiveStock implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("date")
    private ZonedDateTime date;

    @Field("reason")
    private StockCase reason;

    @Field("description")
    private String description;

    @NotNull
    @Field("qty")
    private Integer qty;

    @NotNull
    @Field("temp_val")
    private Double tempVal;

    @Field("timestamp")
    private Integer timestamp;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public LiveStock date(ZonedDateTime date) {
        this.date = date;
        return this;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public StockCase getReason() {
        return reason;
    }

    public LiveStock reason(StockCase reason) {
        this.reason = reason;
        return this;
    }

    public void setReason(StockCase reason) {
        this.reason = reason;
    }

    public String getDescription() {
        return description;
    }

    public LiveStock description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getQty() {
        return qty;
    }

    public LiveStock qty(Integer qty) {
        this.qty = qty;
        return this;
    }

    public void setQty(Integer qty) {
        this.qty = qty;
    }

    public Double getTempVal() {
        return tempVal;
    }

    public LiveStock tempVal(Double tempVal) {
        this.tempVal = tempVal;
        return this;
    }

    public void setTempVal(Double tempVal) {
        this.tempVal = tempVal;
    }

    public Integer getTimestamp() {
        return timestamp;
    }

    public LiveStock timestamp(Integer timestamp) {
        this.timestamp = timestamp;
        return this;
    }

    public void setTimestamp(Integer timestamp) {
        this.timestamp = timestamp;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        LiveStock liveStock = (LiveStock) o;
        if (liveStock.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), liveStock.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "LiveStock{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", reason='" + getReason() + "'" +
            ", description='" + getDescription() + "'" +
            ", qty=" + getQty() +
            ", tempVal=" + getTempVal() +
            ", timestamp=" + getTimestamp() +
            "}";
    }
}
