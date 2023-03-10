from datetime import datetime

from src.models.device import Devices
from src.services.device import create_device, get_devices


def test_create_device(db):
    name = "test"
    model = "panasonic2"
    purchase_date = datetime.now()
    price = 1520.2
    description = "description"
    detection_area = 150.0
    status = "status"
    device = Devices(
        name=name,
        model=model,
        purchase_date=purchase_date,
        price=price,
        description=description,
        detection_area=detection_area,
        status=status,
        operating_life=0.0,
    )

    created_device = create_device(db=db, device=device)

    assert created_device.name == name


def test_get_devices(db, device):
    devices = get_devices(db=db)

    assert isinstance(devices, list)
    assert device in devices


def test_get_devices_limit_zero(db, device):
    devices = get_devices(db=db, limit=0)

    assert len(devices) == 0
